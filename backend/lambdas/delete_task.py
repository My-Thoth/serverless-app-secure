import json
import boto3

# Initialize DynamoDB resource
dynamodb = boto3.resource('dynamodb')
table_name = 'TasksTable'  # Replace with your DynamoDB table name
table = dynamodb.Table(table_name)

def lambda_handler(event, context):
    try:
        task_id = event['pathParameters']['task_id']
        
        # Delete task from DynamoDB
        table.delete_item(
            Key={
                'task_id': task_id
            }
        )
        
        return {
            'statusCode': 200,
            'body': json.dumps({'message': 'Task deleted successfully'})
        }
    except Exception as e:
        return {
            'statusCode': 500,
            'body': json.dumps({'error': str(e)})
        }