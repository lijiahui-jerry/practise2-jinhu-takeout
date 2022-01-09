import Mock from 'mockjs'
import location from './location.json'
import navigation from './navigation.json'
import shops from './shops.json'

Mock.mock('/mock/location',{code:200,data:location})
Mock.mock('/mock/navigation',{code:200,data:navigation})
Mock.mock('/mock/shops',{code:200,data:shops})