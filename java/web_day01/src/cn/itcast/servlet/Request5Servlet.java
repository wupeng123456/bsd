package cn.itcast.servlet;

import java.io.IOException;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import cn.itcast.dto.user;
import utils.JdbcUtils;
import cn.jsbc.demo.jdbcdemo1;

public class Request5Servlet extends HttpServlet {

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		System.out.println("获取请求数据");
		Connection con = null;
		Statement st = null;
		ResultSet res = null;
		//通过key获取参数
		//由于提交的兴趣爱好是一个数组，因此要使用getParameterValues来接收
		String username = request.getParameter("Username");
		String password = request.getParameter("password");
		jdbcdemo1.select2();
//		//设置编码，防止中文乱码
//		response.setContentType("text/html;charset=utf-8");
//		//响应统计量到页面
//		response.getWriter().println("登录成功");

	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doGet(request, response);
	}

}
