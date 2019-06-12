package Demo1;

public class demo1_16 {
//	根据用户输入的数据，显示对应的星期
//	把星期存放到数组中，然后通过制定的天数，在数组中找到对应的星期
//	或者通过对应的星期找到对应的天数
//	定义一个数组，把星期存放景区，然后当外界传递进来一个天数的时候，我们把天数
//	当做数组的下标，然后通过这个下标找到数组中存放的天数
	public static void main(String[] args) {
//		定义天数初始变量
		int day = 1;
//		调用方法
		String week = getWeek(day);
		System.out.println(day+"对应的星期是:"+week);
	}
	/**
	 * 定义功能，根据指定的天数找到对应的星期
	 * 1.需要返回值：String
	 * 2.需要参数：天数
	 * */
	public static String getWeek(int day){
		/**
		 * 以后再定义功能的时候，需要接受外界传递进来的参数
		 * 再使用传递进来的参数之前，一定要先对数据的合法性进行判断
		 * */
		if (day > 0 && day < 8) {
			String[] arr = {"星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"};
			return arr[day - 1];
		} else {
			return "没有对应的星期";
		}
	}
}
