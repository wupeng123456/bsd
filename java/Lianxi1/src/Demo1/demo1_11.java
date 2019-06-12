package Demo1;

public class demo1_11 {
	public static void main(String[] args) {
//		定义数组
		int[] arr = {1,2,12,4,5,6,-1,0};
		printArray(arr);
	}
	public static void printArray(int[] arr) {
//		将数组中的下标有序的增加，使用循环提供数组的下标
		for(int i = 0; i < arr.length; i++) {
//			这里需要增加一个判断语句，如果最后一位，就不需要打印逗号
			if (i == arr.length - 1) {
//				说明数组的下标是整个数组的最后一个下标
				System.out.print(arr[i]);
			} else {
//				说明数组的下标不是最后一个下标
				System.out.print(arr[i] + ",");
			}
		}
	}
}
