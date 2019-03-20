package cn.itcast.servlet;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.ServletConfig;

public class Demo2Servlet extends HttpServlet {
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		System.out.println("获取初始化信息的常用方法：");
		System.out.println("1、getInitParameter(String name):通过key获取value值");
		System.out.println("2、getInitParameterNames():获取所有初始化信息的key，返回的是一个枚举，然后可以通过遍历枚举获取所有的key，在通过key来获取value。");
//		获取初始化信息的常用方法：
//		1、getInitParameter(String name):通过key获取value值
//		2、getInitParameterNames():获取所有初始化信息的key，返回的是一个枚举，然后可以通过遍历枚举获取所有的key，在通过key来获取value。
		//通过servlet获取ServletConfig对象
		ServletConfig config = this.getServletConfig();
		//ServletConfig对象通过key获取初始化信息的值
		String name = config.getInitParameter("name");
		System.out.println("通过getInitParameter取到的name值:" + name);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doGet(request, response);
	}

}
