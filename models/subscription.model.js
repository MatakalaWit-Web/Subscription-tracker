import mongoose from "mongoose";

const subscriptionSchema = new mongoose.SchemaType({
    name: {
    type: String,
    required: [true, "Subscription type is required"],
    trim: true,
    minLength: 3,
    maxLength: 50,
    },

    price: {
    type: Number,
    required: [true, "Price is required"],
    min: [0, "Price cannot be negative"],
    max: [10000, "Price seems too high"],

    },
    currency: {
    type: String,
    required: [true, "Currency is required"],
    enum: ['USD', 'EUR', 'ZAR', 'JPY'],
    default: 'ZAR',
    },

    frequency: {
    type: String,
    required: [true, "Frequency is required"],
    enum: ['monthly', 'yearly' , 'weekly'],
    default: 'monthly',
    },

    category: {
        type: String,
        enum: ['basic', 'standard', 'premium'],
        required: [true, "Category is required"],
    },

    paymentMethod: {
        type: String,
        required: [true, "Payment method is required"],
        trim: true,
    },

    status: {
        type: String,
        enum: ['active', 'inactive', 'canceled'],
        default: 'active',
    },

    startDate: {
        type: Date,
        required: [true, "Start date is required"],
        validate: {
            validator: (value) => value <= new Date(),
            message: "Start date must be in the past",
        },
    },

    renewalDate: {
        type: Date,
        required: [true, "Renewal date is required"],
        validate: {
            validator: function(value) {
                 return value > this.startDate; },
            message: "Renewal date must be in the future",
        },
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, "User reference is required"],
    },
} , { timestamps: true });

subscriptionSchema.pre('save', function(next) {
    if(!this.renewalDate) {
        const renewalperiods = {
            'monthly': 30,
            'yearly': 365,
            'weekly': 7,
            'daily': 1,
        };

        this.renewalDate = new Date(this.startDate);
        this.renewalDate.setDate(this.renewalDate.getDate() + renewalperiods[this.frequency]);
    }

    if(this.renewalDate <new Date()) {
        this.status = 'inactive';
    }

    next();
}) ;

const Subscription = mongoose.model("Subscription", subscriptionSchema);

export default Subscription;
