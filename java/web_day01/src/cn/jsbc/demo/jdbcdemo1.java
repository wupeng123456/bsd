package cn.jsbc.demo;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
import utils.JdbcUtils;
//import org.junit.Test;


import cn.itcast.dto.user;

public class jdbcdemo1 {
	public static void select2() {
		System.out.println("123");
		// TODO Auto-generated method stub
//		Connection con = null;
//		Statement st = null;
//		ResultSet res = null;
//		try {
//			con= JdbcUtils.getConnection();
//			String sql = "SELECT * FROM user WHERE username = 123456 AND password = 123456";
//			st = con.createStatement();
//			res = st.executeQuery(sql);
//			List list = new ArrayList();
//			// 处理结果集
//			while (res.next()) {
//				user emp = new user();
//				emp.setId(res.getInt(1));
//				emp.setUsername(res.getString(2));
//				emp.setPassword(res.getString(3));
//				// 将对象存入集合
//				list.add(emp);
//			}
//			System.out.println(list);
//		} catch (Exception e) {
//			e.printStackTrace();
//		} finally {
//			JdbcUtils.release(con, st, res);
//		}
	}
}
