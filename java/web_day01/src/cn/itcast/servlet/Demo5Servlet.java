

package cn.itcast.servlet;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.ServletContext;
import java.io.FileNotFoundException;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.io.BufferedReader;

public class Demo5Servlet extends HttpServlet {

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		ServletContext context = this.getServletContext();
		String realPath = context.getRealPath("");
		System.out.println(realPath);
		String cpath = context.getRealPath("c.txt");
		System.out.println(cpath);
		readFile(cpath);
		String bpath = context.getRealPath("WEB-INF/classes/b.txt");
		readFile(bpath);
		String dpath = context.getRealPath("WEB-INF/d.txt");
		readFile(dpath);
		/*
		 * ServletContext是web应用程序的上下文对象，可以通过该对象设置多个servlet之间的共享数据。

			常用方法：
			getAttribute(String name)：通过key获取value
			getAttributeNames():获取所有的key的枚举类型，通过遍历获取对应的value
			setAttribute(String name, Object object):设置共享数据
			getContextPath()：获取相对路径
			getRealPath(String path)：获取绝对路径
			getMimeType(String file):获取文件的MIME类型，一般在下载文件的时候用（在浏览器中用以指定打开不同类型的文件）
			*/

	}
	private void readFile(String cpath) throws FileNotFoundException,
	IOException {
		FileInputStream in = new FileInputStream(cpath);
		InputStreamReader reader = new InputStreamReader(in);
		BufferedReader br = new BufferedReader(reader);
		String line =null;
		while((line=br.readLine())!=null){
			System.out.println(line);
		}
		br.close();
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doGet(request, response);
	}

}
