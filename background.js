var dicomatrix = {
  lex: "definition/",
  syn: "synonymie/",
  ant: "antonymie/",
  ety: "etymologie/",
  mor: "morphologie/",
  pro: "proxemie/",
  con: "concordance/"
};

browser.contextMenus.create({
  id: "cnrtl",
  title: "CNRTL",
  contexts: ["selection"],
  onclick: openCNRTL
});

function openCNRTL(info) {
  var selection = info.selectionText;
  selection = selection.replace(/\u00AD/g, '');
  browser.storage.local.get("cnrtldicovector").then(item => {
    var cnrtldicovector = item.cnrtldicovector || 'lex';
    var link = 'http://www.cnrtl.fr/' + dicomatrix[cnrtldicovector] + selection;
    var creating = browser.tabs.create({
      url:link
    });
  });
}
