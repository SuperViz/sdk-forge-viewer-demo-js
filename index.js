import { supervizSdk } from "./modules/superviz/supervizSdk.js"
import forgeSdk from './modules/forge/forgeSdk.js'

const CONTENT_SYNC_PROPERTY = "content";

const FORGE_MODELS = [
    "<AUTODESK_FORGE_MODEL_URN>",
    "<AUTODESK_FORGE_MODEL_URN>",
    "<AUTODESK_FORGE_MODEL_URN>"
]

let currentContentIndex = 0;

supervizSdk.subscribe(CONTENT_SYNC_PROPERTY, (newModelSid) => {
    forgeSdk.loadContent(newModelSid)
});

const sendSyncCommand = function (index) {
    supervizSdk.setSyncProperty(CONTENT_SYNC_PROPERTY, FORGE_MODELS[index]);
}

document.getElementById('previousButton').onclick = function () {
    currentContentIndex--;
    const index = Math.abs(currentContentIndex % FORGE_MODELS.length);
    sendSyncCommand(index)
};

document.getElementById('nextButton').onclick = function () {
    currentContentIndex++;
    const index = Math.abs(currentContentIndex % FORGE_MODELS.length);
    sendSyncCommand(index)
};

forgeSdk.loadContent(FORGE_MODELS[0]);