export const orders = {
  SP248763: {
    id: "SP248763",
    customer: "Fardin",
    product: {
      name: "Wireless Earbuds",
      variant: "White",
      quantity: 1,
      price: 2450,
      image: "🎧"
    },
    carrier: "Pathao Courier",
    trackingNumber: "PT-9083-4412",
    deliveryAddress: "Chattogram, Bangladesh",
    placedAt: "Sep 22, 2026",
    states: {
      normal: {
        label: "Out for Delivery",
        shortLabel: "Out for Delivery",
        tone: "blue",
        headline: "Your order is on the way",
        description: "The delivery partner has your package and should arrive today.",
        eta: "Today, 5:30 PM",
        steps: [
          { title: "Order placed", description: "Sep 22, 10:12 AM", done: true },
          { title: "Processing", description: "Sep 22, 11:40 AM", done: true },
          { title: "Shipped", description: "Sep 23, 9:15 AM", done: true },
          { title: "Out for delivery", description: "Today, 3:05 PM", current: true },
          { title: "Delivered", description: "Waiting for delivery", upcoming: true }
        ]
      },
      delayed: {
        label: "Delivery Delayed",
        shortLabel: "Delayed",
        tone: "amber",
        headline: "Your delivery is taking longer than expected",
        description: "The original delivery window has passed. We have updated the estimated delivery time.",
        eta: "Tomorrow, 6:00 PM",
        steps: [
          { title: "Order placed", description: "Sep 22, 10:12 AM", done: true },
          { title: "Processing", description: "Sep 22, 11:40 AM", done: true },
          { title: "Shipped", description: "Sep 23, 9:15 AM", done: true },
          { title: "Out for delivery", description: "Delivery attempt delayed", current: true },
          { title: "Delivered", description: "Updated estimate: Tomorrow", upcoming: true }
        ]
      },
      deliveredNotReceived: {
        label: "Marked as Delivered",
        shortLabel: "Delivered",
        tone: "rose",
        headline: "Your order was marked as delivered",
        description: "If you did not receive the package, you can report a delivery issue and our support team will help.",
        eta: "Delivered today",
        steps: [
          { title: "Order placed", description: "Sep 22, 10:12 AM", done: true },
          { title: "Processing", description: "Sep 22, 11:40 AM", done: true },
          { title: "Shipped", description: "Sep 23, 9:15 AM", done: true },
          { title: "Out for delivery", description: "Today, 12:20 PM", done: true },
          { title: "Delivered", description: "Today, 2:08 PM", current: true }
        ]
      },
      trackingUnavailable: {
        label: "Tracking Not Available Yet",
        shortLabel: "Tracking unavailable",
        tone: "slate",
        headline: "Tracking will be available soon",
        description: "Your order is confirmed. The delivery partner has not added tracking information yet.",
        eta: "Estimated Sep 29–30",
        steps: [
          { title: "Order placed", description: "Sep 22, 10:12 AM", done: true },
          { title: "Processing", description: "Preparing your package", current: true },
          { title: "Shipped", description: "Tracking will appear after dispatch", upcoming: true },
          { title: "Out for delivery", description: "Waiting for carrier update", upcoming: true },
          { title: "Delivered", description: "Waiting for delivery", upcoming: true }
        ]
      }
    }
  }
};

export const stateOptions = [
  { key: "normal", label: "Normal" },
  { key: "delayed", label: "Delayed" },
  { key: "deliveredNotReceived", label: "Delivered, not received" },
  { key: "trackingUnavailable", label: "Tracking unavailable" }
];