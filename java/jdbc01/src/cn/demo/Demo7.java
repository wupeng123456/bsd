package cn.demo;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import org.junit.Test;

public class Demo7 {
	@Test
	public void select() {
		Connection connection = null;
		Statement statement = null;
		ResultSet resultSet = null;
		try {
			// 加载驱动
			Class.forName("com.mysql.jdbc.Driver");
			// 建立连接
			connection = DriverManager.getConnection("jdbc:mysql:///jdbcdemo", "root", "password");
			// 创建数据库操作对象
			statement = connection.createStatement();
			// 执行查询操作
			String sql = "select * from employee where id between 1 and 4";
			resultSet = statement.executeQuery(sql);
			// 定义集合 将数据存入到集合中
			List<Employee> list = new ArrayList<Employee>();
			// 遍历封装
			while (resultSet.next()) {
				int intId = resultSet.getInt("id");
				String stringName = resultSet.getString("name");
				int intAge = resultSet.getInt("age");
				String sy = intId + "..."+ stringName + "..." + intAge;
				System.out.println(sy);
				// 封装到对象中
				Employee emp = new Employee();
				emp.setId(resultSet.getInt("id"));
				emp.setName(resultSet.getString("name"));
				emp.setAge(resultSet.getInt("age"));
				// 将数据存入集合中
				list.add(emp);
			}
			System.out.println(list);
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			try {
				if (connection != null) {
					connection.close();
				}
			} catch (SQLException e2) {
				// TODO: handle exception
				e2.printStackTrace();
			}
			try {
				if (statement != null) {
					statement.close();
				}
			} catch (SQLException e2) {
				// TODO: handle exception
				e2.printStackTrace();
			}
			try {
				if (resultSet != null) {
					resultSet.close();
				}
			} catch (SQLException e2) {
				// TODO: handle exception
			}
		}
	}

}
