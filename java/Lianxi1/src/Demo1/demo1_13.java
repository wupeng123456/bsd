package Demo1;

public class demo1_13 {
	public static void main(String[] args) {
//		��������
		int[] arr = {1,2,3,4,5,6,7,8,99};
//		�����Զ��庯��
		int max = getArrayMax(arr);
		System.out.println("max="+max);
	}
	/**
	 * ����һ������
	 * 		1 ��û�з���ֵ
	 * 			�н������е�����ֵ���ظ�������
	 * 		2.��û�в���
	 * 			�У��̶�����
	 * */
	public static int getArrayMax(int[] arr) {
//		����һ�������������ֵ
//		����һ�����ֵ
		int max = arr[0];
//		ʹ��ѭ��ȥ�������пռ�����ݺͼ�������ֵ���бȽ�
		for (int i = 0; i < arr.length; i++) {
//			ʹ���ж��������жϣ����ȡ�����������max�б��������
//			��ȥ�������鸳ֵ��max
			if(max < arr[i]){
				max = arr[i];
			}
		}
//		�ȽϽ��������ֵmax���ظ�������
		return max;
	}
}
