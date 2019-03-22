package cn.itcast.servlet;

import java.io.IOException;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class Demo3Servlet extends HttpServlet {
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		/*
		 * 2.2.	多servlet共享数据 ★★★★
		由于一个web应用程序中的所有Servlet共享同一个ServletContxt对象,因此ServletContext中的属性可以被Web应用程序中的所有servlet访问。
		ServletContext当做容器使用的时候，把ServletContext称为域（范围）对象。
		
		在ServletContext中分别定义了用于 增加、删除、获取ServletContext属性的3个方法：
		1、	增加
		setAttribute(String name, Object object) 
		通过该方法可以将数据以key和value的形式存储到ServletContext中
		
		2、	删除
		removeAttribute(String name) 
		通过该方法可以将配置信息从ServletConfig中删除
		
		3、	获取
		getAttribute(String name) ：通过key获取value
		
		【示例】
		需求：统计网站的访问量,并且响应到浏览器中。
		分析：由于多个servlet之间可以实现数据共享，那么就可以设置一个数值类型的值存入ServletContext对象中，每次用户访问一个servlet就给这个值+1，然后响应到页面即可。
		
		步骤一：创建一个servlet
		创建一个servlet用来统计网站访问量
		 */
		// 获取ServletContext对象
		ServletContext context = this.getServletContext();
		// 通过一个count数据来统计访问统计量
		Integer count = (Integer) context.getAttribute("count");
		// 判断count 是否为null
		if (count == null) {
			// 如果是null，表示初次访问，给count设置初始值1
			count = 1;
		} else {
			//如果不为null，表示再次访问，可以在原来的值上+1
			count++;
		}
		// 将赋值后count重新放回ServletContext中，以便其他servlet访问时获取数据
		context.setAttribute("count", count);
		// 设置编码，防止中文乱码
		response.setContentType("text/html;charset=utf-8");
		// 响应统计量到页面
		response.getWriter().println("网站访问量为：" + count);

	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doGet(request, response);
	}

}

