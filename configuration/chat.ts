import { OWNER_NAME, AI_NAME } from "./identity";

export const INITIAL_MESSAGE: string = `What;s up!, I'm ${AI_NAME}, ${OWNER_NAME}'s AI assistant or little helper monkey as he calls me.`;
export const DEFAULT_RESPONSE_MESSAGE: string = `Sorry, I am being weird right now. Please try again at a time that is not now.`;
export const WORD_CUTOFF: number = 8000; // Number of words until bot says it needs a break
export const WORD_BREAK_MESSAGE: string = `[WORD BREAK MESSAGE]`;
export const HISTORY_CONTEXT_LENGTH: number = 7; // Number of messages to use for context when generating a response
