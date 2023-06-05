const assets = {
  "报警转化率":require('./images/报警转化率.png'),
  "报警总数":require('./images/报警总数.png'),
  "已消除报警":require('./images/已消除报警.png'),
  "未确认报警":require('./images/未确认报警数.png'),
  "已确认报警":require('./images/已确认报警数.png'),
}

export default (label:keyof typeof assets)=>{
  return assets[label]
}
