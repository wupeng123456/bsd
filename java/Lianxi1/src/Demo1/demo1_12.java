package Demo1;

public class demo1_12 {
	public static void main(String[] args) {
//		计算数组中所有数据的和
//		定义一个存储数据的数组
//		定义一个变量用来接收数组中所有数据的和
//		遍历数组，去除数组中的数据一次和上面的定义的变量相加
//		将求和的功能封装成一个函数，将求和的结果返回给调用 者并打印
//		定义数组
		int[] arr = {1, 2, 3, 4, 5};
//		调用自己定义的函数
		int sum = getArraySum(arr);
//		在屏幕上打印数组中所有数据的和
		System.out.println("sum=" + sum);
	}
//	定义函数来计算数组中所有数据的和
/**
 * 1，有没有返回值？
 * 	有，返回的是数组中所有数据的和
 * 2，有没有参数
 * 	有具体的数组
 * */
	public static int getArraySum(int[] arr) {
//		定义一个变量接收数组中所有数据的和
		int sum = 0;
//		遍历去除数组中每个空间中的数据
		for (int i = 0; i < arr.length; i++) {
//		将数组中每个数组中的每个数据和变量sum相加
			sum = sum + arr[i];
		}
//		将数组的数据和sum返回给调用者
		return sum;
	}
}
