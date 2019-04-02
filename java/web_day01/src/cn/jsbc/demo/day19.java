package cn.jsbc.demo;
import java.lang.reflect.Field;
import java.security.acl.Permission;
import java.util.HashMap;
import java.util.Map;

import org.apache.commons.beanutils.BeanUtils;
import org.junit.Test;

import cn.itcast.dto.Car;
import cn.itcast.dto.Person;
public class day19 {
	// 回顾获取Class对象的三种方式
//	@Test
	public void test1() throws Exception {
		Car car = new Car();
		System.out.println(car);
		Class clazz1 = car.getClass();
		System.out.println(clazz1);
		System.out.println(Car.class);
		Class clazz3 = Class.forName("cn.itcast.dto.Car");
		System.out.println(clazz3);
	}
	/**
	 * 演示获取类中的成员变量
	 * @throws Exception
	 */
//	@Test
	public void test2() throws Exception{
		Class clazz = Class.forName("cn.itcast.dto.Car");
		System.out.println(clazz);
		Field[] fields = clazz.getDeclaredFields();
		System.out.println(fields);
		for (Field field : fields) {
			System.out.println(field);
		}
	}
	/**
	 * 演示获取类中的成员变量
	 * @throws Exception
	 */
	// @Test
	public void test3() throws Exception{
		Class clazz = Class.forName("cn.itcast.dto.Car");
		Field field = clazz.getDeclaredField("name");
		System.out.println(field);

	}
	/*
	 * 	@Test
	public void test4() throws Exception {
		
		Map<String, Object> map = new HashMap<>();
		map.put("age", 19);
		map.put("name", "舒淇");
		// 准备对象
		Person p = new Person();
		// 没数据
		System.out.println(p);
		// 准备一个工具类
		BeanUtils.populate(p, map);
		// 数据封装完成，有数据
		System.out.println(p);
	}
	 * */
	@Test
	public void test4() throws Exception {
		Map<String,Object > map = new HashMap<String,Object >();
		map.put("name", "张三");
		map.put("age", 18);
		Person p = new Person();
		System.out.println("1" + p);
		BeanUtils.populate(p, map);
		System.out.println("2" + p);

	}

}
