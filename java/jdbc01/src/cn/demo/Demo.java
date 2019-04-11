package cn.demo;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

import org.junit.Test;

public class Demo {
	@Test
	public void qury() throws Exception {
		// 1.加载数据库驱动
//		DriverManager.registerDriver(new Driver());
		Class.forName("com.mysql.jdbc.Driver");
		// 2.建立数据库连接
		// jdbc:mysql:连接mysql数据库的固定写法，localhost：ip地址，3306：端口号，jdbcDemo：数据库名称
		String url = "jdbc:mysql://localhost:3306/jdbcDemo";
		// 第一个参数：连接mysql数据库,第二和第三个参数分别是数据库的用户名和密码
		Connection con = DriverManager.getConnection(url, "root", "password");
		// 3.获取statement对象
		Statement st = con.createStatement();
		// 4.执行sql语句，并且获取结果
		String sql = "select * from employee";
		ResultSet res = st.executeQuery(sql);
		// 5.处理结果
		while (res.next()) {
			System.out.println(res.getString("name"));
		}
		// 6.释放资源
		res.close();
		st.close();
		con.close();
	}

}
