package Demo1;

public class demo1_12 {
	public static void main(String[] args) {
//		�����������������ݵĺ�
//		����һ���洢���ݵ�����
//		����һ���������������������������ݵĺ�
//		�������飬ȥ�������е�����һ�κ�����Ķ���ı������
//		����͵Ĺ��ܷ�װ��һ������������͵Ľ�����ظ����� �߲���ӡ
//		��������
		int[] arr = {1, 2, 3, 4, 5};
//		�����Լ�����ĺ���
		int sum = getArraySum(arr);
//		����Ļ�ϴ�ӡ�������������ݵĺ�
		System.out.println("sum=" + sum);
	}
//	���庯���������������������ݵĺ�
/**
 * 1����û�з���ֵ��
 * 	�У����ص����������������ݵĺ�
 * 2����û�в���
 * 	�о��������
 * */
	public static int getArraySum(int[] arr) {
//		����һ�����������������������ݵĺ�
		int sum = 0;
//		����ȥ��������ÿ���ռ��е�����
		for (int i = 0; i < arr.length; i++) {
//		��������ÿ�������е�ÿ�����ݺͱ���sum���
			sum = sum + arr[i];
		}
//		����������ݺ�sum���ظ�������
		return sum;
	}
}