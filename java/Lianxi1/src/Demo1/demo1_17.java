package Demo1;

public class demo1_17 {
/**
 * 1������һ�����顣
2������һ��������ѡ������Ĺ��ܷ�װ�������С�
3����������ռ�����Ҫ�������ݣ���ʱ��Ҫ����һ����ʱ����temp������ѡ�пռ�����ݡ�
4��ʹ��forѭ����ѡ�пռ���±���б��������forѭ����Ϊ���ѭ����
5��ʹ��forѭ����ѡ�пռ����Ŀռ���±���б��������forѭ����Ϊ�ڲ�ѭ����
6��ʹ���жϽṹ��ѡ�пռ��е����ݺͺ���Ŀռ��е����ݽ��бȽϣ����ѡ�пռ������ݴ��ں���ռ��е����ݣ��򽻻��ռ��е����ݡ����ѡ�пռ�������С�ں���ռ��е����ݣ��򲻽����ռ��е����ݡ�
7���ڶ���һ������������ӡ�����е����ݡ�

*/
	public static void main(String[] args) 
	{
		int[] arr = {11,22,33,44,55,66,77,99,0,-1};
		printArray(arr);
		selectSort(arr);
		printArray(arr);
	}
	public static void selectSort( int[] arr )
	{
		//���ж����������
		for ( int i = 0; i<arr.length - 1 ; i++ ) 
			//��ѭ���ṩ���ǵ�ǰ��Ҫѡ����Ǹ��ռ���±�
		{
			for ( int j = i+1 ; j<arr.length ; j++ ) 
				//��ѭ���ṩ���� ��ѭ���ṩ��ĳ���ռ����ʣ������пռ��±�
			{
				//��ѡ�еĿռ�ͺ����ĳ���ռ���бȽ�
				if( arr[i] > arr[j] )
				{
					int temp = arr[i];
					arr[i] = arr[j];
					arr[j] = temp;
				}
			}
		}
	}
	//��ӡ�����е�����
		public static void printArray( int[] arr )
		{
			for ( int i=0; i<arr.length ; i++ )
			{
				System.out.print(arr[i] + " ");
			}	
			System.out.println();
			
		}

}
