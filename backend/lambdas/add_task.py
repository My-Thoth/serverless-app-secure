import json
import boto3
import uuid
import datetime

# Initialize DynamoDB resource
dynamodb = boto3.resource('dynamodb')
table_name = 'TasksTable'  # Replace with your DynamoDB table name
table = dynamodb.Table(table_name)

def lambda_handler(event, context):
    try:
        body = json.loads(event['body'])
        task_id = str(uuid.uuid4())
        timestamp = datetime.datetime.utcnow().isoformat()
        
        # Add task to DynamoDB
        table.put_item(
            Item={
                'task_id': task_id,
                'task_name': body['task_name'],
                'created_at': timestamp
            }
        )
        
        return {
            'statusCode': 200,
            'body': json.dumps({'message': 'Task added successfully', 'task_id': task_id})
        }
    except Exception as e:
        return {
            'statusCode': 500,
            'body': json.dumps({'error': str(e)})
        }