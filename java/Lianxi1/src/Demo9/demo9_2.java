package Demo9;

abstract class demo9_2 {
	int a = 10; // �Ǿ�̬��Ա����
	static int b = 100;// ��̬��Ա����
//	�Ǿ�̬����
	public void show() {
		System.out.println("�Ǿ�̬����");
	}
//	��̬����
	public static void fun(){
		System.out.println("��̬����");
	}
//	���캯�� ������������̳�ʱ�����๹�캯�����õ�
//	Ŀ���Ǹ����еķǾ�̬��Ա������ʾ��ֵ
	demo9_2(){
		System.out.println("���캯��Demo");
	}
	static {
		System.out.println("��̬�����");
	}
	{
		System.out.println("��������");
	}
//	c������
	abstract void method();
}
