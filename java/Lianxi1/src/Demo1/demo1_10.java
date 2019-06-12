package Demo1;

public class demo1_10 {
//需求：将数组中的每一个数据打印到屏幕上
	/**
	 * 数组的遍历
	 * 			遍历：把数组真的所有空间都访问一遍
	 * 			访问数组的空间需要使用：数组名+数组的下标，才能访问到数组的每个空间
	 * 			同一个数组，名称是统一的，只有下标，而下标是从零开始的，到长度-1结束
	 * 			下标是在有序的增加
	 * */
	public static void main(String[] args) {
		int[] arr = new int[]{15,16,17};
		for (int i = 0; i <= arr.length - 1; i++) {
			System.out.println(arr[i]);
		}
	}
}
