import {createRequire} from 'module';
import Subscription from '../models/subscription.model';
const require = createRequire(import.meta.url);

const { serve } = require("@upstash/workflow/express");


export const sendReminders = serve (async () => {

    const {subscriptionId} = context.requestPayload;
    const subscription = await fetchSubscriptionById(context, subscriptionId);

    if (!subscription || subscription.status !== 'active') return;

    const renewalDate = new Date(subscription.renewalDate);
});


const fetchSubscriptionById = async (context, subscriptionId) => {
    return await context.run('get subsrtiption',() => {
        return Subscription.findById(subscriptionId).populate('user', 'email name');
    })

};