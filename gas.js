function doPost(e) {
  var email = e.parameter.email;
  var date = new Date();

  // メール送信
  var toAdr = email;
  var subject = "事前登録完了のお知らせ";
  var fromName = "送り主";
  var body = "　メールの本文";
  
  GmailApp.sendEmail(toAdr, subject, body, {from: fromAdr , name: fromName});

  // シート取得
  if(email.length > 0) {
    var ss = SpreadsheetApp.openByUrl(スプレットシートのURL);
    var sheet = ss.getSheetByName("LP事前登録者");
    
    // データ入力
    sheet.appendRow([email, date]);
  }
  
  return;
}
