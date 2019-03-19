package cn.itcast.servlet;
import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class DemoServlet extends HttpServlet {
	// doGet方法：专门用来处理get请求的
		// get请求的方式有：1、form表单，method="get" 2、地址栏直接通过url路径访问 3、通过a标签（超链接）请求

		@Override
		protected void doGet(HttpServletRequest req, HttpServletResponse resp)
				throws ServletException, IOException {
			resp.getWriter().write("this is a method of get");
		}
		
		// doPost方法：专门由来处理post请求的
		// post请求的方式：1、form表单中的method="post"

		@Override
		protected void doPost(HttpServletRequest req, HttpServletResponse resp)
				throws ServletException, IOException {
			
		}

}
