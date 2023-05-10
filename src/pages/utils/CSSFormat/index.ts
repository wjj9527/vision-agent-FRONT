type StyleType = {
  display: 'block' | 'inline' | 'inline-block' | 'none' | string;
  flexDirection: 'row' | 'row-reverse' | 'column' | 'column-reverse' | string;
  justifyContent: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | string;
  alignItems: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch' | string;
  flexWrap: 'nowrap' | 'wrap' | 'wrap-reverse' | string;
  marginTop: string;
  marginBottom: string;
  marginLeft: string;
  marginRight: string;
  paddingTop: string;
  paddingBottom: string;
  paddingLeft: string;
  paddingRight: string;
  width: string | null;
  height: string | null;
  widthPrefix: 'px' | 'em' | '%' | string;
  heightPrefix: 'px' | 'em' | '%' | string;
};
export const CSSFormat = (styles:StyleType|any)=>{
  const height = styles.height?`${styles.height}${styles.heightPrefix}`:null
  const width = styles.width?`${styles.width}${styles.widthPrefix}`:null
  const marginBottom = `${styles.marginBottom}px`
  const marginLeft = `${styles.marginLeft}px`
  const marginRight = `${styles.marginRight}px`
  const marginTop = `${styles.marginTop}px`
  const paddingBottom = `${styles.paddingBottom}px`
  const paddingLeft = `${styles.paddingLeft}px`
  const paddingRight = `${styles.paddingRight}px`
  const paddingTop = `${styles.paddingTop}px`
  const format = {...styles}
  Object.assign(format,{
    height,
    width,
    marginBottom,
    marginLeft,
    marginRight,
    marginTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingTop
  })

  return format
}
