import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/zh-cn'
import { authorId, pocketbaseApiUrl } from '@/constants/config'

// 获取pocketbase图片
export const imageUrl = (collection, imagePath) => {
  const path = `${pocketbaseApiUrl}/api/files/${collection}/${authorId}/${imagePath}`
  return path
}

// 序列化字符串 tags
export const serializationString = string => string.split(/,\s*/)

// Date格式化
dayjs.extend(relativeTime)
export const dateFormat = date => dayjs(date).format('YYYY-MM-DD')
export const fullDateFormat = date => dayjs(date).format('YYYY-MM-DD HH:mm:ss')
export const dateNowFormat = date => dayjs(date).locale('zh-cn').fromNow()
