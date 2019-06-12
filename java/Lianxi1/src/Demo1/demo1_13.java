package Demo1;

public class demo1_13 {
	public static void main(String[] args) {
//		定义数组
		int[] arr = {1,2,3,4,5,6,7,8,99};
//		调用自定义函数
		int max = getArrayMax(arr);
		System.out.println("max="+max);
	}
	/**
	 * 定义一个函数
	 * 		1 有没有返回值
	 * 			有将数组中的最大的值返回给调用者
	 * 		2.有没有参数
	 * 			有，固定数组
	 * */
	public static int getArrayMax(int[] arr) {
//		定义一个变量，存放最值
//		假设一个最大值
		int max = arr[0];
//		使用循环去除数组中空间的数据和假设的最大值进行比较
		for (int i = 0; i < arr.length; i++) {
//			使用判断语句进行判断，如果取出的数组大于max中保存的数据
//			则将去除的数组赋值给max
			if(max < arr[i]){
				max = arr[i];
			}
		}
//		比较结束将最大值max返回给调用者
		return max;
	}
}
