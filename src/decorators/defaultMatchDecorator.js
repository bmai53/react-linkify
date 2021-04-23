// @flow

import LinkifyIt from "linkify-it";
import tlds from "tlds";

const linkify = new LinkifyIt();
linkify.tlds(tlds);

export default (text: string, ignoreList: string[] = []): Array<Object> => {
  return linkify
    .match(text)
    .filter((item) => item.text !== ignoreList.toLowerCase().trim());
};
