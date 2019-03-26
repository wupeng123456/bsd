package cn.itcast.servlet;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class Request2Servlet extends HttpServlet {

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		/*
		//获取url
		StringBuffer url = request.getRequestURL();
		System.out.println(url);
		//获取uri
		String uri = request.getRequestURI();
		System.out.println(uri);
*/
		// 获取方法的名称
		String method = request.getMethod();
		System.out.println("请求方法的名称:" +  method);
		// 获取服务器的端口
		int port = request.getLocalPort();
		System.out.println("服务器端口:" + port);
		// 获取请求地址
		String remoteAddr = request.getRemoteAddr();
		System.out.println("获取请求地址：" + remoteAddr);
		// 获取协议
		String protocol = request.getProtocol();
		System.out.println("协议名称" + protocol);
		// 获取url
		StringBuffer url = request.getRequestURL();
		System.out.println("url:"+url);
		// 获取uri
		String uri = request.getRequestURI();
		System.out.println("uri:" + uri);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doGet(request, response);
	}

}
