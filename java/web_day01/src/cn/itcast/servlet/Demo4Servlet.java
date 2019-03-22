package cn.itcast.servlet;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.ServletContext;

public class Demo4Servlet extends HttpServlet {

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// 获取ServletContext对象
				ServletContext context = this.getServletContext();
				// 通过一个count数据来统计访问量
				Integer count = (Integer) context.getAttribute("count");
				// 判断count是否为null
				if (count == null) {
					// 如果是null,表示初次访问，给count设置初始值为1
					count = 1;
				} else {
					// 如果不为null，表示再次访问，可以在原来的值上+1
					count++;
				}
				// 将赋值后的count重新放回ServletContext中，以便其他servlet访问时获取数据
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
