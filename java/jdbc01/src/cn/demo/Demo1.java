package cn.demo;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

import org.junit.Test;

public class Demo1 {
	@Test
	public void execute() throws Exception {
		// 注册驱动
		Class.forName("com.mysql.jdbc.Driver");
		// 后去连接
		Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/jdbcdemo", "root", "password");
		// 定义sql
		String sql = "select * from employee";
//		String sql = "INSERT INTO employee values(NULL, '貂蝉', 18)";
		// 更新貂蝉的年龄为18岁
//		String sql = "update employee set age = 18 where name = '貂蝉'";
		// 创建sql操作对象
		Statement st = con.createStatement();
		// 执行查询,并且返回boolean
		boolean flag = st.execute(sql);
		// 判断flag是否为true来判断到底是不是查询语句
		if (flag) {
			// 如果是true，就证明是一个查询语句，需要获取结果集
			ResultSet res = st.getResultSet();
			while (res.next()) {
				System.out.println(res.getInt("id") + "..." + res.getString("name") + "..." + res.getInt("age"));
				
			}
			res.close();
		} else {
			// 如果是false，就证明不是查询语句
			System.out.println("sql语句执行成功！ 一共操作了" + st.getUpdateCount() + "条sql语句");
		}		
		// 释放资源
		st.close();
		con.close();
	}
}
