import Mock from 'mockjs'
let Random = Mock.Random

let total = Random.natural(50, 100)
let mockData = Mock.mock({
  'code': 200,
  'message': '操作成功',
  [`totalRecords|${total}`]: 1,
  [`data|${total}`]: [{
    'num|+1': 1,
    'id|+1': Random.natural(3500001, 3500999),
    'date': Random.date(),
    'orderDate': Random.datetime(),
    'totalMoney|1-1000': 1,
    'money|1-1000.2': 1
  }]
})

Mock.mock('/aa.jj', 'post', (option) => {
  console.log(option)
  return mockData
})
