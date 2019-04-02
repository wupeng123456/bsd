package utils;

import java.lang.reflect.Field;
import java.util.Map;

public class BeanUtils {
	/*
	 * //封装数据的方法
	public static void populate(Object obj, Map<String, Object> map) {
		
		//获取对象中要封装数据的属性（成员变量）
		//这里不会编程Object类的Class，获取的还是Person大Class
		Class clazz = obj.getClass();
		//获取成员
		Field[] fields = clazz.getDeclaredFields();
		//遍历循环
		for (Field field : fields) {
			
			for (String key : map.keySet()) {
				//要求当前成员的名称和key值要一致
				if(field.getName().equals(key)){
					try {
						//当前字段是私有的所以，需要取消java语言访问检查
						field.setAccessible(true);
						//封装数据
						field.set(obj, map.get(key));
					} catch (Exception e) {
						e.printStackTrace();
					}
					
				}
			}
		}
	}*/
//	封装数据的方法
	public static void populate(Object obj, Map<String, Object> map) {
//		获取对象中药封装数据的属性(成员变量)
//		这里不会变成Object类的Class，获取的还会Person大Class
		Class clazz = obj.getClass();
//		获取成员
		Field[] fields = clazz.getDeclaredFields();
//		遍历循环
		for (Field field : fields) {
			for (String key : map.keySet()) {
//				要求当前成员的名称和key值要一值
				if (field.getName().equals(key)) {
					try {
//						当前字段是私有的所以，需要取消java语言访问检查
						field.setAccessible(true);
//						封装数据
						field.set(obj, map.get(key));
					} catch (Exception e) {
						e.printStackTrace();
					}
				}
			}
		}
	}

}
