package Demo1;

public class demo1_6 {
	public static void main(String[] args) 
	{
		for (int i=1;i<=5;i++ )//控制打印几行的
		{
			for (int j=1;j<=i ;j++ )//控制一行打印几个星号
			{
				System.out.print("*"); 
			}
			//循环结束，表示这一行中打印的星号全部结束，下次需要在新的一行打印
			System.out.println();//打印空行，起到换行的作用
		}
	}

}
