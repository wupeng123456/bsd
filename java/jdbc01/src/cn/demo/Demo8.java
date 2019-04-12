package cn.demo;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import org.junit.Test;

import cn.itcast.utils.jdbcUtils;

public class Demo8 {
	@Test
	public void select2() {
		Connection connection = null;
		Statement statement = null;
		ResultSet resultSet = null;
		try {
			connection = jdbcUtils.getConnection();
			String sql = "select * from employee";
			statement = connection.createStatement();
			resultSet = statement.executeQuery(sql);
			List list = new ArrayList();
			while (resultSet.next()) {
				Employee employee = new Employee();
				employee.setId(resultSet.getInt("id"));
				employee.setName(resultSet.getString("name"));
				employee.setAge(resultSet.getInt("age"));
				list.add(employee);
			}
			System.out.println(list);
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
	}

}
