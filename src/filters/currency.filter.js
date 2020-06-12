export default function currencyFilter(value, currency = 'RUB') {
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency,
    currencyDisplay: 'symbol', // 'code'
    useGrouping: true
  }).format(value)
}