import dayjs from "dayjs";

import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const { serve } = require('@upstash/workflow/express');
import Subscription from "../models/subscription.model.js";
import {sendReminderEmail} from "../utils/send-email.js";

const REMAINDERS = [7, 5, 2, 1];

export const sendRemainders = serve(async (context) => {
    const { subscriptionId } = context.requestPayload;
    const subscription = await fetchSubscription(context, subscriptionId);

    if(!subscription || subscription.status !== 'active') return;

    const renewalDate = dayjs(subscription.renewalDate)

    if(renewalDate.isBefore(dayjs())){
        console.log(`Renewal date has passed for subscription ${subscriptionId}. Stopping Workflow`);
        return;
    }

    for(const daysBefore of REMAINDERS){
        const remainderDate = renewalDate.subtract(daysBefore,'day');

        if(remainderDate.isAfter(dayjs())){
            await sleepUntilRemainder(context, `Remainder ${daysBefore} days before `, remainderDate);
        }
        if (dayjs().isSame(remainderDate, 'day')) {
            await triggerRemainder(context, `${daysBefore} days before reminder`, subscription);
        }
    }
});

const fetchSubscription = async (context, subscriptionId) => {
    return await context.run('get subscription', async () => {
        return Subscription.findById(subscriptionId).populate('user', 'name email')
    })
}

const sleepUntilRemainder = async (context, label, date) => {
    console.log(`Sleep until ${label} remainder at ${date}`)
    await context.sleepUntil(label, date.toDate());
}

const triggerRemainder = async (context, label, subscription) => {
    return await context.run(label, async () => {
        console.log(`Triggering ${label} remainder`);
        await sendReminderEmail({
            to: subscription.user.email,
            type: label,
            subscription,
        })
    })
}