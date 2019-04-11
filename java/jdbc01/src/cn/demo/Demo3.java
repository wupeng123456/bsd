package cn.demo;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import org.junit.Test;

public class Demo3 {
	@Test
	public void close() {
		Connection con = null;
		Statement st = null;
		ResultSet res = null;
		try {
			// 加载数据库驱动
			Class.forName("com.mysql.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql:///jdbcDemo", "root", "password");
			st = con.createStatement();
			// 执行查询
			res = st.executeQuery("select count(*) as num from employee");
			if (res.next()) {
				System.out.println(res.getInt("num"));
			}
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			try {
				if (res != null) {
					res.close();
				}
			} catch (SQLException e1) {
				e1.printStackTrace();
			}
			try {
				if (st != null) {
					st.close();
				}
			} catch (SQLException e1) {
				e1.printStackTrace();
			}
			try {
				if (con != null) {
					con.close();
				}
			} catch (SQLException e1) {
				e1.printStackTrace();
			}
		}
	}
}
