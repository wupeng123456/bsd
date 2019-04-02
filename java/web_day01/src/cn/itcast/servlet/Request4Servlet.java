package cn.itcast.servlet;

import java.io.IOException;
import java.net.URLDecoder;
import java.net.URLEncoder;
import java.util.Map.Entry;
import java.util.Arrays;
import java.util.Map;
import java.util.Set;


import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class Request4Servlet extends HttpServlet {

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// 通过key获取参数
		String username = request.getParameter("username");
		//将数据使用iso8859-1编译回去
		byte[] bytes = username.getBytes("iso8859-1");
		//重新使用utf-8字符集将数据组合成字符串
		String newUsername = new String(bytes,"utf-8");
		System.out.println(username);
		System.out.println(newUsername);
		String sex = request.getParameter("sex");
		//java提供了一个工具类，可以对字符串使用不同的字符集进行编译和解析
		//使用iso8859-1对字符串进行反编译
		String encodeSex = URLEncoder.encode(sex, "iso8859-1");
		//再次使用utf-8对字符串进行解析
		String decodeSex = URLDecoder.decode(encodeSex, "utf-8");
		System.out.println(decodeSex);
		String age = request.getParameter("age");
		int age1 = Integer.parseInt(age);
		System.out.println(age1);
		// 由于提交的兴趣爱好是一个数组，影子要是用getParameterValues来接受
		String[] hobbys = request.getParameterValues("hobby");
		System.out.println(Arrays.toString(hobbys));
		for (int i = 0; i < hobbys.length; i++) {
			System.out.println(hobbys[i]);
		}
		// 一次性获取所有表单参数
		Map<String, String[]> map = request.getParameterMap();
		Set<Entry<String, String[]>> entrySet = map.entrySet();
		for (Entry<String, String[]> entry : entrySet) {
			String key = entry.getKey();
			String[] value = entry.getValue();
			System.out.println(key+"..."+Arrays.toString(value));
		}
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doGet(request, response);
	}

}
