package cn.dao;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;

import org.junit.Test;

import cn.demo.User;
import cn.itcast.utils.jdbcUtils;

public class UserDao {
	@Test
	public User login(User user) {
		Connection con = null;
		Statement st = null;
		ResultSet res = null;
		try {
			// 获取连接
			con = jdbcUtils.getConnection();
			// 创建数据库操作对象
			st = con.createStatement();
			// 执行sql
			String sql = "select * from User where username = '"+user.getUsername()+"' and password = '"+user.getPassword()+"'";
			res = st.executeQuery(sql);
			//获取数据并封装
			if(res.next()){
				User queryUser = new User();
				queryUser.setId(res.getInt("id"));
				queryUser.setUsername(res.getString("username"));
				queryUser.setPassword(res.getString("password"));
				return queryUser;
			}

		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			jdbcUtils.release(con, st, res);
		}
		return null;
	}
}
