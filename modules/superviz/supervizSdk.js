const DEVELOPER_KEY = "<SUPERVIZ_DEVELOPER_TOKEN>";

export const supervizSdk = await SuperVizSdk.init(DEVELOPER_KEY, {
    userGroup: {
        id: "<GROUP-ID>",
        name: "<GROUP-NAME>"
    },
    user: {
        id: "<MY-USER-ID>",
        name: "<MY-USER-NAME>",
        isHostCandidate: true
    },
    roomId: "<ROOM-ID>",
    debug: true
});