package cn.itcast.utils;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Properties;


public class jdbcUtils {
	static String url;
	static String driverClass;
	static String password;
	static String user;
	// 数据库驱动只需要加载一次
	// static 静态代码块在加载的时候回执行，并且只会执行一次
	static {
		try {
			Properties pro = new Properties();
			InputStream inputStream = new FileInputStream("src/jdbc.properties");
			pro.load(inputStream);
			driverClass = pro.getProperty("driverClass");
			url=pro.getProperty("url");
			user=pro.getProperty("user");
			password=pro.getProperty("password");
			Class.forName(driverClass);
			//			Class.forName("com.mysql.jdbc.Driver");
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
			// TODO: handle exception
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	// 对外提供获取连接的方法
	// 异常可以直接抛出,因为在调用该方法处还会执行try-catch
	public static Connection getConnection() throws SQLException {
//		String url = "jdbc:mysql:///jdbcdemo";
//		String user = "root";
//		String password = "password";
		Connection con = DriverManager.getConnection(url, user, password);
		return con;
	}
	
	// 释放资源方法2
	// 其他增删改释放资源
	public static void release(Connection con, Statement st, ResultSet res) {
		try {
			if (con != null) {
				con.close();
			}
		} catch (SQLException e) {
			e.printStackTrace();
			// TODO: handle exception
		}
		try {
			if (st != null) {
				st.close();
			}
		} catch (SQLException e) {
			// TODO: handle exception
			e.printStackTrace();
		}
	}
}
