package cn.demo;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;

import org.junit.Test;

public class Demo5 {
	@Test
	public void update() {
		Connection con = null;
		Statement  st = null;
		try {
			// 加载驱动
			Class.forName("com.mysql.jdbc.Driver");
			// 建立连接
			con = DriverManager.getConnection("jdbc:mysql:///jdbcDemo", "root", "password");
			// 创建数据库操作对象
			st = con.createStatement();
			// 执行插入操作
			int count = st.executeUpdate("update employee set age = 22 where id = 4");
			System.out.println("一共修改了"+count+"条记录");
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			try {
				if (con != null) {
					con.close();
				}
			} catch (SQLException e) {
				e.printStackTrace();
			}
			try {
				if (st != null) {
					st.close();
				}
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
	}
}
