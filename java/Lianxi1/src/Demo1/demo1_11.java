package Demo1;

public class demo1_11 {
	public static void main(String[] args) {
//		��������
		int[] arr = {1,2,12,4,5,6,-1,0};
		printArray(arr);
	}
	public static void printArray(int[] arr) {
//		�������е��±���������ӣ�ʹ��ѭ���ṩ������±�
		for(int i = 0; i < arr.length; i++) {
//			������Ҫ����һ���ж���䣬������һλ���Ͳ���Ҫ��ӡ����
			if (i == arr.length - 1) {
//				˵��������±���������������һ���±�
				System.out.print(arr[i]);
			} else {
//				˵��������±겻�����һ���±�
				System.out.print(arr[i] + ",");
			}
		}
	}
}
