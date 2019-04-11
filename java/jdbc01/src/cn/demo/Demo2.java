package cn.demo;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import org.junit.Test;

public class Demo2 {
	// 需求：从数据库中查询所有数据，并将每一行记录封装到一个Employee对象中,并且遍历所有数据库中查询出来的人员信息。
	@Test
	public void resultSet() throws Exception {
		// 注册数据库驱动
		Class.forName("com.mysql.jdbc.Driver");
		// 创建连接
		Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/jdbcdemo", "root", "password");
		// 定义sql
		String sql = "select * from employee";
		// 创建sql的操作对象
		Statement st = con.createStatement();
		// 发送sql，获取结果集
		ResultSet res = st.executeQuery(sql);
		// 创建一个集合用来存储对象
		List<Employee> list = new ArrayList<Employee>();
		// 处理结果集
		while (res.next()) {
			// 将获取的数据封装的对象中
			Employee emp = new Employee();
			emp.setId(res.getInt("id"));
			emp.setName(res.getString("name"));
			emp.setAge(res.getInt("age"));
			list.add(emp);
		}
		System.out.println(list);
		con.close();
		st.close();
		res.close();
		
	}

}
