package cn.demo;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;

import org.junit.Test;

public class Demo6 {
	@Test
	public void delete() {
		Connection connection = null;
		Statement statement = null;
		try {
			// 加载驱动
			Class.forName("com.mysql.jdbc.Driver");
			// 建立连接
			connection = DriverManager.getConnection("jdbc:mysql:///jdbcDemo", "root", "password");
			// 创建数据库操作对象
			statement = connection.createStatement();
			// 执行插入操作
			int count = statement.executeUpdate("delete from employee where id = 4");
			System.out.println("成功删除了" + count + "条记录");
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			try {
				if (connection != null) {
					connection.close();
				}
			} catch (Exception e2) {
				// TODO: handle exception
				e2.printStackTrace();
			}
			try {
				if (statement != null) {
					statement.close();
				}
			} catch (Exception e2) {
				// TODO: handle exception
				e2.printStackTrace();
			}
		}
	}
}
