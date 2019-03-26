package utils;

import java.io.FileInputStream;
import java.io.InputStream;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Properties;
public class JdbcUtils {
	static String url;
	static String user;
	static String password;
	static String driverClass;
	// 数据库驱动只需要加载一次
	// static静态代码块在类加载的时候会执行，并且只执行一次
	static {
		try {
			Properties pro = new Properties();
			InputStream imputSystem = new FileInputStream("jdbc.properties");
			//加载properties文件
			pro.load(imputSystem);
			//读取properties文件中的数据
			driverClass = pro.getProperty("driverClass");
			url=pro.getProperty("url");
			user=pro.getProperty("user");
			password=pro.getProperty("password");
			Class.forName(driverClass);
		}catch (Exception e) {
			e.printStackTrace();
		}

	}

	// 对外提供获取连接的方法
	// 异常可以直接抛出，因为在调用该方法处还会执行try-catch.
	public static Connection getConnection() throws SQLException {
		Connection con = DriverManager.getConnection(url, user, password);
		return con;
	}
	
	//释放资源方法2
	//其他增删改释放资源
// 其他增删改释放资源
	public static void release(Connection con, Statement st) {
		try {
			if (st != null) {
				st.close();
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
		try {
			if (con != null) {
				con.close();
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
	//释放资源方法1
	// 查询的时候释放资源
	public static void release(Connection con, Statement st, ResultSet res) {
		try {
			if (res != null) {
				res.close();
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
		try {
			if (con != null) {
				con.close();
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
}
