require("dotenv").config();
const { WebClient } = require("@slack/web-api");
const dayjs = require("dayjs");

// An access token (from your Slack app or custom integration - xoxp, xoxb)
const token = process.env.SLACK_TOKEN;

const web = new WebClient(token);

// This argument can be a channel ID, a DM ID, a MPDM ID, or a group ID
const channelId = process.env.SLACK_CHANNEL_ID;

(async () => {
  // See: https://api.slack.com/methods/chat.postMessage
  const res = await web.conversations.history({
    channel: channelId,
    oldest: dayjs().subtract(7, "day").unix(),
  });

  console.log(res);
})();
