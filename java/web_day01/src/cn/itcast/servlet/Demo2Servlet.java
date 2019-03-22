package cn.itcast.servlet;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.ServletConfig;
import javax.servlet.ServletContext;

import java.util.Enumeration;
import utils.console;;

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
		console.log("通过getInitParameter取到的name值:" + name);
		//获取所有的配置信息
		Enumeration<String> names = config.getInitParameterNames();
		while (names.hasMoreElements()) {
			String key = (String) names.nextElement();
			console.log(key+"..."+config.getInitParameter(key));
		}

		console.log("2.	ServletContext接口");
		console.log("什么是ServletContext?");
		console.log("运行在Java虚拟机中的每一个Web应用程序都有一个与之相关的Servlet上下文,即ServletContext。");
		console.log("ServletContext提供对应用程序中所有Servlet所共有的各种资源和功能的访问.");
		console.log("ServletContext的API用于设置应用程序中所有Servlet共有的信息.");
		console.log("运行于同一服务器的Servlet有时会共享资源，如JSP页面、文件和其他Servlet。");
	/*
	 * 如何获取配置信息？
		在获取全局的配置信息之前，需要先获取ServletContext对象
		1、	先获取ServletConfig对象
		可以通过ServletConfig对象中的getServletContext()获取ServletContext对象
		或者通过继承自GenericServlet对象的getServletContext()方法获取ServletContext对象
		
		2、	通过ServletConfig对象中方法获取初始化的配置信息
		通过ServletContext对象中的getInitParameter(String name)方法获取初始化配置信息
		或者通过ServletContext对象中的getInitParameterNames()方法获取所有的key的枚举类型，然后遍历枚举获取value值
		*/
		//获取全局配置信息方式一
		//获取ServletContext对象方式一：
		/*ServletContext context = this.getServletConfig().getServletContext();
		String name = context.getInitParameter("name");
		String address = context.getInitParameter("address");
		System.out.println(name+"..."+address);
		*/
		ServletContext context = this.getServletConfig().getServletContext();
		String name1 = context.getInitParameter("name");
		String address = context.getInitParameter("address");
		console.log(name1 + "..." + address);

		//获取全局配置信息方式二
		//获取ServletContext对象方式二：
		ServletConfig context2 = this.getServletConfig();
		Enumeration<String> enumeration = context2.getInitParameterNames();
		while(enumeration.hasMoreElements()) {
			String keys = enumeration.nextElement();
			String name2 = context2.getInitParameter(keys);
			console.log(name2);
		}
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doGet(request, response);
	}

}
